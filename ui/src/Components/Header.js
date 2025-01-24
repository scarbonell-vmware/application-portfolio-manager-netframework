import React from 'react';
import { useState, useEffect } from 'react';
import AboutDialog from './AboutDialog';
const Header = ( {navigationCallBack, version} ) => {
    const [instanceIndex, setInstanceIndex] = useState("...")
    const [displayAboutDialog, setDisplayAboutDialog] = useState(false)
   
    const onAboutDialogClose = () => {
      setDisplayAboutDialog(false)
   }

   const onAboutDialogOpen = () => {
       setDisplayAboutDialog(true)
    }

  
    return (
        <header className='header'>
            <div className="flex-container">
                <div className='logo'></div>
                <div className='title'>Application Portfolio Manager <span id="version">{version.name} </span><span id="stack">[.NET FRAMEWORK 4.8]</span></div>
                <div className='instance-index'>{'TAS Instance: '+instanceIndex}</div>
                <div className='about-bt' onClick={onAboutDialogOpen}></div>
            </div>
            {displayAboutDialog && <AboutDialog version={version} onClose={onAboutDialogClose} ></AboutDialog>}
        </header>
    );
};
export default Header;