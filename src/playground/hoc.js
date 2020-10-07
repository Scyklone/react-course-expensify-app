// Higher Order Component - A componetn that renders another component
// Reuse code
// Render hijacking
// Prop Manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>

);

const widthAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAdmin && <p>This is private info. please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    );

};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAuthenticated ? ( 
        <WrappedComponent {...props} />
        ) : (
            <p>Need an authentication to proceed with info!</p>
        )}
        </div>
    );
};

// requireAuthentication

const AdminInfo = widthAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));