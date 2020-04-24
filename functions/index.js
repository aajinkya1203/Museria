const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello bois");
});

const createNotif = (notification) =>{
    return admin.firestore().collection('notifications').add({
        notification
    }).then((doc)=>{
        console.log("notification added",doc);
    })
}

exports.postCreate = functions.firestore
    .document('projects/{project}')
    .onCreate(doc=>{

        const project = doc.data();
        const notif = {
            content:'added a new post!',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotif(notif);
})

exports.userJoined = functions.auth
    .user()
    .onCreate(user=>{
        return admin.firestore()
            .collection('users')
            .doc(user.uid)
            .get().then((doc)=>{

                const newUser = doc.data();
                const notif ={
                    content:'joined the party!',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotif(notif);
            })
    })