import React from 'react';

export default function withBlueBorder(OriginalComponent) {
  class HOC extends React.Component {
    render() {
      return (
        
        <div style={{ border: '4px blue solid' }}>
          <OriginalComponent />
        </div>
      );
    }
  }
  return HOC;
}
