import React from 'react'

const ButtonImperativeHandle = React.forwardRef((props, ref) => {
  const inputRef = React.useRef(null);
  const [isAuthImperative, setIsAuthImperative] = React.useState(false);
  const { text } = props;

  React.useImperativeHandle(ref, () => {
    return {
      getNumber() {
        return 10
      },
      focusInput() {
        inputRef.current.focus();
        inputRef.current.style.background = '#f00';
      },
      isAuthImperative() {
        const number = this.getNumber();
        console.log('isAuthImperative test this: ', number)
        setIsAuthImperative(prevState => !prevState);
      }
      // isAuthImperative: () => {
      //   console.log('isAuthImperative: ', this)
      //   setIsAuthImperative(prevState => !prevState);
      // }
    }
  })
 
  return (
    <button type="button" ref={inputRef}>{isAuthImperative ? `${text} logout` : `${text} login`}</button>
  )
})

export default ButtonImperativeHandle