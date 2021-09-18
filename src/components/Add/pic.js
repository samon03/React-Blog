{
    const pic = event.target.files[0];
    const types = ['image/png', 'image/jpg', 'image/jpeg'];
    if (pic && types.includes(pic.type)) {
        this.setState({image: pic})
    } else {
        this.setState(null)
    }
    
 }