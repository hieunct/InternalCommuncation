export function AuthService(type, userData) {
    let BaseURL = 'http://localhost:8080/hieu/';
    return new Promise ((resolve, reject) => fetch(BaseURL + type, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
          })
          .then(response => response.text())
          .then(res => {
              resolve(res)
          })
    ) 
}
