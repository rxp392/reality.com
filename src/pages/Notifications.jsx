import React , {useState} from 'react';
import { getTokenn} from '../firebase';
import { onMessageListener } from '../firebase';
import MagicBell, { FloatingNotificationInbox } from "@magicbell/magicbell-react";
import { ProjectClient } from 'magicbell/project-client'


const theme = {"header":{"fontFamily":"inherit","backgroundColor":"#FFFFFF","textColor":"#5225C1","fontSize":"15px","borderRadius":"16px"},"notification":{"default":{"fontSize":"14px","borderRadius":"16px","margin":"8px","backgroundColor":"#FFFFFF","textColor":"#3A424D","fontFamily":"inherit"},"unread":{"backgroundColor":"#F8F5FF","textColor":"#3A424D","hover":{"backgroundColor":"#F2EDFC"},"state":{"color":"#5225C1"}},"unseen":{"backgroundColor":"#F8F5FF","textColor":"#3A424D","hover":{"backgroundColor":"#F2EDFC"},"state":{"color":"#5225C1"}}},"icon":{"borderColor":"#888FD0","width":"24px"},"unseenBadge":{"backgroundColor":"#F80808"},"banner":{"backgroundColor":"#F8F5FF","textColor":"#3A424D","fontSize":"14px"},"dialog":{"backgroundColor":"#F5F5F5","textColor":"#313131","accentColor":"#5225C1"},"footer":{"fontFamily":"inherit","backgroundColor":"#FFFFFF","textColor":"#5225C1","fontSize":"15px","borderRadius":"16px"}};
const images = {"emptyInboxUrl":""};
const magicbell = new ProjectClient({
  apiKey: '2f2c121e945a99208fb517aa3ddf62f304c1a5f7',
  apiSecret: 'Z4XxZQ180bg2HNTFVY5wyPOj+LcLmYXMSvPG/fMc'
});

    function NotifyComponent() {
      const [show, setShow] = useState(true);
      const [notification, setNotification] = useState({title: 'Test', body: 'Test'});
      const [isTokenFound, setTokenFound] = useState(false);
      
      //todo: fix notif creatioon
       onMessageListener().then(payload => {
        setShow(true);
         //setNotification({title: 'Notification Allowed', body: 'Test Notif'})
        magicbell.notifications.create({
          title: 'Try MagicBell',
          body: 'Test',
          action_url: 'localhost:3000',
          recipients: [{ email: 'rupikamericapplication@gmail.com' }],
        })
        console.log(payload);
      }).catch(err => console.log('failed: ', err));
  
      // let currentToken = await getTokenn(setTokenFound).then((res) => console.log(res))
      return (
          <MagicBell
            apiKey="2f2c121e945a99208fb517aa3ddf62f304c1a5f7"
           userEmail='rupikamericapplication@gmail.com'
            theme={theme}
            images={images}
            locale="en"
          >
            {(props) => <FloatingNotificationInbox width={400} height={500} {...props} />}
          </MagicBell>
        )
}

export default NotifyComponent

