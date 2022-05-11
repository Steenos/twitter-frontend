import * as borsh from '@project-serum/borsh'

export interface Tweet {
    publicKey: number;
    author: string;
    timestamp: number;
    topic: string;
    content: string;

    /* constructor(publicKey, accountData){
        this.publicKey = publicKey;
        this.author = accountData.author;
        this.timestamp = accountData.timestamp;
        this.topic = accountData.topic;
        this.content = accountData.content;
    }

    static borshAccountSchema = borsh.struct([
        borsh.str('topic'),
        borsh.str('content'),
    ]) */

    
}