import { request } from 'umi';
import { siKuAccount, siZhangAccount } from './config';


export function queryCurrentUser (options?: { [key: string]: any }) {
  // return request('/api/currentUser', {
  //   method: 'GET',
  //   ...(options || {}),
  // });
  
  return {
    data: {
      name: 'ssss'
    },
    
  }
}

export async function login(body: any, options?: { [key: string]: any }) {
  console.log(body);
  return new Promise((resolve, reject) => {
    const { username, password } = body
    if (siKuAccount.username === username && siKuAccount.password === password) {
      resolve({
        user: 'siku',
        login: true,
      })
    } else if (siZhangAccount.username === username && siZhangAccount.password === password) {
      resolve({
        user: 'sizhang',
        login: true
      })
    } else {
      reject(false)
    }
  })
  // return request('/api/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   data: body,
  //   ...(options || {}),
  // });
}
