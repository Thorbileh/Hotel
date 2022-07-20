import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import addRoomAdmin from './AddRoom.module.css'
import { db, storage } from '../firebase';
import { getDownloadURL, listAll, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const AddRooms = () => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([]);

    const navigate = useNavigate();
    const [guest, setGuest] = useState([]);
    const [Price, setPrice] = useState(0);
    const [Type, setType] = useState("");
    const [hotelName,sethotelName] = useState("");

    const [progressImage, setprogressImage] = useState(0)
    const userTableRef = collection(db, 'Hotel')
    const imageListRef = ref(storage, 'Khayalami/')

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `Khayalami/${imageUpload.name + v4()}`);
        const uploadTask = uploadBytesResumable(imageRef, imageUpload)
        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setprogressImage(prog);
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        addDoc(userTableRef, { Price: Price, Type: Type, Image:url ,HotelName:hotelName})
                        alert("submitted successfully")

                    })

            }
        );
        /*  
         uploadBytes(imageRef, imageUpload).then((item) => {
             getDownloadURL(item).then((url) => {
                 setImageList((prev) => [...prev, url]);
                 alert("ImageUploaded");
             })
             
         }) */
    }

    const handleImages = (event) => {
        setImageUpload(event.target.files[0])
    }

    useEffect(() => {
        const getguest = async () => {
            const data = await getDocs(userTableRef)
            setGuest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getguest();
    })

    const bookNow = (data) => {

        navigate("/Book", { state: { data: data } })
    }
    return (
        <body >

            <div className={addRoomAdmin.rooms}>

                <h2 className={addRoomAdmin.h2}>Rooms & Suites</h2>

                <input type="file" onChange={(event) => { handleImages(event) }}></input>{progressImage} %<br></br>
                Price:<input type='text' onChange={(event) => { setPrice(event.target.value) }}></input><br></br>
                Hotel Name:<input type='text' onChange={(event) => { sethotelName(event.target.value) }}></input><br></br>
                {/* Imgae1:<input type='file' onChange={(event) => { handleImages(event) }}></input> */}
               {/*  Type:<input type='text' onChange={(event) => { setType(event.target.value) }}></input>
                Type:<input type='text' onChange={(event) => { setType(event.target.value) }}></input> */}

                <button onClick={uploadImage}>Upload</button>


                {guest.map((value, id) => (
                    <div /* className={RoomMod.roomType} */ key={id}>
                        <div /* className={RoomMod.RoomsPic} */>
                            <h3>{value.Type}</h3>
                        </div>

                        <div /* className={RoomMod.RoomsPic} */>
                            <h4>R{value.Price} </h4>{/* <h5>/per night</h5> */}
                            <h6>{value.WhatIsInside}</h6>
                            <img src={value.Image}></img>
                           

                        </div>
                    </div>

                ))}

            </div>
        </body>
    );
}
export default AddRooms;