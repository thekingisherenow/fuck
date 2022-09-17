import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

function Post({id,userName,userImg,img,caption}) {
    return ( <div className='m-3'>
        
        {/* Header */}
        <div className='flex justify-between border'>
            <div className='flex space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full'
            src= {userImg} />
            <p>{userName} </p>
            </div>
            <div className='flex justify-end'>

            <EllipsisHorizontalIcon className='h-5 w-5'/>
            </div>

        </div>
        {/* Image  */}
            <img src ={img} className="h-40"/>
        {/* Buttons */}

        {/* Likes */}
        {/* Captions  */}
        {/* comments */}
        {/* input box */}



    </div> );
}

export default Post;