const today = new Date();
const day = String(today.getDate()).padStart(2, '0')
const monthIndex = today.getMonth();
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const dispDate = `${day} ${monthNames[monthIndex]}`;