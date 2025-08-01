import React from 'react';

export default function Alert(props) {
    const capital = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{
              bottom: "20px",
              position: 'fixed',
              left: "20px",
              zIndex: 9999,
              padding: "10px 20px",
              minWidth: "200px"
            }} role="alert">
            <strong>{capital(props.alert.type)}</strong>:{props.alert.msg}
    </div>
  )
}
 