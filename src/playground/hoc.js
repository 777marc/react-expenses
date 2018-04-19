import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>  
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private!</p>
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo info="message from inside!" />, document.getElementById('app'));

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : ( 
                <p>Please log in!</p> 
            )}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="message from inside!" />, document.getElementById('app'));