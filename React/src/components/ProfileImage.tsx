import React, { ReactElement } from 'react'

interface ProfileImageProps {
    image?: string
}

const ProfileImage = (props: ProfileImageProps): ReactElement => {

    const { image } = props
    return (
        <div>
            <img src={image}></img>
        </div>
    )

}

export default ProfileImage;