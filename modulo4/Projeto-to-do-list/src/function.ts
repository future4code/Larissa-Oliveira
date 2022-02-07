export const transformDate = (date: Date): string => {

    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()
  
    return dd + '/' + mm + '/' + yyyy;
  }
  
export const certifyEmail = (email: string): boolean => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  };