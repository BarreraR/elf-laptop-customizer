// This object will allow us to
// easily convert numbers into US dollar values

export default new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });