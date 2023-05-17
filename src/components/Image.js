import React, { useState } from 'react'
import image1 from '../Images/img1.jpg'
import image2 from '../Images/img2.jpg'
import image3 from '../Images/img3.jpeg'
import image4 from '../Images/img4.jpg'
import image5 from '../Images/img5.jpeg'
import classes from './Image.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Image = () => {

    const [selectedImage, setSelectedImage] = useState(0)

    const [allImage] = useState([image1, image2, image3, image4, image5])

    const clickHandlerLeft = () => {

        if (selectedImage > 0) {
            setSelectedImage(selectedImage - 1)
        }
    }
    const clickHandlerRight = () => {
        if (selectedImage < allImage.length - 1) {
            setSelectedImage(selectedImage + 1)
        }
    }

    return (
        <div>
            <div className={classes["dispaly-main"]}>
                <div >
                    <img className={classes.display} src={allImage[selectedImage]} alt="" />
                </div>

                <div className={classes.content}>
                    <h1>W Maldives</h1>
                    <p>
                        What is Maldives famous for? The Maldives is famous for a number of reasons,
                        including its vibrant culture, pristine beaches, sprawling greenery, and fascinating landmarks.
                        Apart from the numerous enchanting landmarks, Maldives is also famous for water sports and other
                        adventure activities.Republic of Maldives is an independent nation and gained independence in 1965.
                        Historically, Maldives was colonised by the Portuguese, the Dutch, the British but was largely ruled by
                        a sultanate. Now, Maldives has a president which oversees the administration of the country.
                    </p>
                </div>
            </div>
            <div className={classes["display-bottom"]}>
                <div className={classes.children}>
                    <button className={classes.left} onClick={clickHandlerLeft}><FontAwesomeIcon icon={faCaretLeft} /></button>

                    {allImage.map((image) => {
                        return <img className={classes.child} src={image} alt="" />
                    })
                    }

                    <button className={classes.right} onClick={clickHandlerRight}><FontAwesomeIcon icon={faCaretRight} /></button>
                </div>
                <div>
                    <button className={classes.pause}><FontAwesomeIcon icon={faPlayCircle} /></button>
                </div>
            </div>
        </div>
    )
}

export default Image;
