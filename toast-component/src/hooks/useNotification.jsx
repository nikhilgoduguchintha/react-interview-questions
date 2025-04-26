import { useState, useRef, useEffect } from "react";
import Notification from "../containers/Notifications";

const useNotification = (defaultPosition = 'top-right') => {
    const [notifications, setNotifications] = useState([]);
    const timersRef = useRef({}); // key: id, value: timer

    const triggerNotification = (notificationProps) => {
        const id = Date.now() + Math.random(); // unique id
        const newNotification = { id, position: notificationProps.position || defaultPosition, ...notificationProps };
        
        setNotifications((prev) => [...prev, newNotification]);

        const timer = setTimeout(() => {
            setNotifications((prev) => prev.filter(n => n.id !== id));
            delete timersRef.current[id];
        }, notificationProps.duration);

        timersRef.current[id] = timer;
    };
    const dismissNotification = (id) => {
        setNotifications((prev) => prev.filter(n => n.id !== id));
        if (timersRef.current[id]) {
            clearTimeout(timersRef.current[id]);
            delete timersRef.current[id];
        }
    };
      
    
    useEffect(() => {
        return () => {
            Object.values(timersRef.current).forEach(clearTimeout);
        };
    }, []);

    // Group notifications by position
    const groupedNotifications = notifications.reduce((groups, notification) => {
        const position = notification.position;
        if (!groups[position]) {
            groups[position] = [];
        }
        groups[position].push(notification);
        return groups;
    }, {});

    const NotificationComponent = Object.entries(groupedNotifications).map(([position, notifications]) => (
        <div key={position} className={position}>
            {notifications.map((notification) => (
                <div key={notification.id} className="notificationItem">
                    <Notification {...notification} onClose={() => dismissNotification(notification.id)}/>
                </div>
            ))}
        </div>
    ));

    return { triggerNotification, NotificationComponent };
};

export default useNotification;
