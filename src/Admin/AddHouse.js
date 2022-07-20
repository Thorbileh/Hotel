import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import addRoomAdmin from './AddRoom.module.css'
import { db, storage } from '../firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { collection, getDocs } from 'firebase/firestore';

const AddHouse = () => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([]);
    const navigate = useNavigate();
    const [guest, setGuest] = useState([]);

    const userTableRef = collection(db, 'House Lodge')
    const imageListRef = ref(storage, 'House Lodge/')

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `House Lodge/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("ImageUploaded");
        })
    }

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                })
            })
        })
    }, [])



    useEffect(() => {
        const getguest = async () => {
            const data = await getDocs(userTableRef)
            setGuest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getguest();
    }, [])

    const bookNow = (data) => {

        navigate("/Book", { state: { data: data } })
    }
    return (
        <body >

            <div className={addRoomAdmin.rooms}>

                <h2 className={addRoomAdmin.h2}>Rooms & Suites</h2>

                <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }}></input><br></br>

                <button onClick={uploadImage}>Upload</button>

                
                 {guest.map((value, id) => (
                    <div /* className={RoomMod.roomType} */ key={id}>
                        <div /* className={RoomMod.RoomsPic} */>
                            <h3>{value.Type}</h3>
                        </div>

                        <div /* className={RoomMod.RoomsPic} */>
                            <h4>R{value.Price} </h4><h5>/per night</h5>
                            <h6>{value.WhatIsInside}</h6>
                            
                            {imageList.map((url) => {
                    return <img src={url}></img>
                })}
                          <button type='submit' onClick={bookNow}>Book Now</button>  
                        </div>
                    </div>

                ))}

            </div>
        </body>
    );
}
export default AddHouse;