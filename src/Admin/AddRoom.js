import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import addRoomAdmin from './AddRoom.module.css'
import { db, storage } from '../firebase';
import { getDownloadURL, listAll, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import NavBar from '../navBar';
import LogOut from '../User/logOut';

const AddRoom = () => {
    const [imageUpload, setImageUpload] = useState(null)

    const [imageList, setImageList] = useState([]);

    const navigate = useNavigate();
    const [guest, setGuest] = useState([]);


    const [price, setPrice] = useState(0);
    const [roomType, setRoomType] = useState("");
    const [hotelName, setHotelName] = useState("");



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
                        addDoc(userTableRef, { Price: price, RoomType: roomType, Image: url, HotelName: hotelName })
                        alert("submitted successfully")

                    })

            }
        );

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

    /* const bookNow = (data) => {

        navigate("/Book", { state: { data: data } })
    } */
    return (
        <body >
            <NavBar />
            <div className={addRoomAdmin.rooms}>
            <LogOut/> 
                <div className={addRoomAdmin.add}>
                    <h2 className={addRoomAdmin.h2}>Rooms & Suites</h2>

                    HotelImage<input type="file" onChange={(event) => { handleImages(event) }}></input>{progressImage} %<br></br>
                    Price:<input type='text' onChange={(event) => { setPrice(event.target.value) }}></input><br></br>
                    Hotel Name:<input type='text' onChange={(event) => { setHotelName(event.target.value) }}></input><br></br>
                    Room Type:<input type='text' onChange={(event) => { setRoomType(event.target.value) }}></input><br></br>

                    <button onClick={uploadImage}>Upload</button>


                </div>
                {guest.map((value, id) => (
                    <diV className={addRoomAdmin.output}>
                        <div className={addRoomAdmin.roomType}>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14422.686953401464!2d31.043543!3d-25.348794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7010ad1198a0dec1!2sWhite%20House%20Lodge!5e0!3m2!1sen!2sza!4v1658669766620!5m2!1sen!2sza" ></iframe>
                        </div>
                        <div className={addRoomAdmin.roomType}>
                            <img src={value.Image}></img>
                        </div>
                        <div className={addRoomAdmin.roomTy} key={id}>
                            <h2>{value.HotelName}</h2>
                            <h3>{value.RoomType}</h3>
                            <h4>R {value.Price} <span>/per night</span></h4>
                            <h6>{value.WhatIsInside}</h6>

                        </div>

                    </diV>

                ))}


            </div>
        </body>
    );
}
export default AddRoom;