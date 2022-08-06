import React, {useEffect, useState} from 'react';

const Link = ({className, href, children, activeClass}) => {
    const [classList, setClassList] = useState((className || '').split(' '));
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const active = activeClass || 'active';
        const onLocationChange = () => {
            if (window.location.pathname === href) {
                if (!classList.includes(active)) {
                    setClassList([...classList, active]);
                }
            } else {
                if (classList.includes(active)) {
                    setClassList(classList.filter(e => e !== active));
                }
            }
        };

        if (!isMounted) {
            onLocationChange();
        }
        setIsMounted(true);

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [classList, href, activeClass, isMounted]);

    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={onClick} className={classList.join(' ')} href={href}>
            {children}
        </a>
    )
}

export default Link;

const navigateTo = (href) => {
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
}

export {navigateTo};