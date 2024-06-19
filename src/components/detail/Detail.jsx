import { auth } from "../../lib/firebase"
import { useChatStore } from "../../lib/chatStore"
import { useUserStore } from "../../lib/userStore"
import "./detail.css"
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"

const Detail = () => {

    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = 
    useChatStore();
    const { currentUser } = useUserStore();

    const handleBlock = async () => {
        if (!user) return;

        const userDocRef = doc(db, "users", currentUser.id)

        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            });
            changeBlock()
        } catch (err) {
          console.log(err)  
        }

    }
    return (
        <div className="detail">
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt="" />
                <h2>{user?.username}</h2>
                <p>Inthe app oru puthiya purachi da !!!</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDwon.png" alt="" />
                    </div>

                    <div className="photos">

                        <div className="photoItem">
                            <div className="photoDetail">
                           <img src="./nota.jpg" alt="" /> 
                           <span>phot_2021_2.jpg</span>
                           </div>
                           <img src="./download.png" alt=""  className="icon"/>
                        </div>

                        <div className="photoItem">
                            <div className="photoDetail">
                           <img src="./nota.jpg" alt="" /> 
                           <span>phot_2021_2.jpg</span>
                           </div>
                           <img src="./download.png" alt=""  className="icon"/>
                        </div>

                       
                        <div className="photoItem">
                            <div className="photoDetail">
                           <img src="./nota.jpg" alt="" /> 
                           <span>phot_2021_2.jpg</span>
                           </div>
                           <img src="./download.png" alt="" className="icon"/>
                        </div>

                    </div>
                    
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button onClick={handleBlock}>{
                    
                  isCurrentUserBlocked ? "You are Blocked!"  : isReceiverBlocked ? "User blocked" : "Block User"
                    
                    
                    }</button>
                <button className="logout" onClick={() => auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail