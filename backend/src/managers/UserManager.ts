import { Socket } from "socket.io";
let GLOBAL_ROOM_ID = 1

export interface User{
    socket :Socket,
    name : string
}

export class UserManager {
    private users :User[]
    private queue : string[]
    constructor() {
        this.users = []
        this.queue = []
    }

    addUser(name: string, socket : Socket){
        this.users.push({
            socket, name    
        })
        this.queue.push(socket.id)
        this.clearQueue()
    }

    removeUser(socketId: string){   
        this.users = this.users.filter(x => x.socket.id === socketId)
        this.queue = this.queue.filter(x => x === socketId)
    }

    clearQueue(){
        if(this.queue.length < 2){
            return;
        }
        const userid1 = this.queue.pop()
        const user1 = this.users.find(x => x.socket.id === userid1)
        const userid2 = this.queue.pop()
        const user2 = this.users.find(x => x.socket.id === userid2)
        // user1?.socket.emit("new-room",{
        //     type : 'send-offer',
        //     roomId
        // })
    }

}