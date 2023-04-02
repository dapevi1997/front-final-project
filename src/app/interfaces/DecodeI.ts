export interface DecodedI {
    
        "iss": string,
        "aud": string,
        "auth_time": number,
        "user_id": string,
        "sub": string,
        "iat": number,
        "exp": string,
        "email": string,
        "firebase":firbaseI,
        "email_verified": boolean,
 
      
}
export interface firbaseI{
    "identities":identityI,
    "sign_in_provider": string    
}

export interface identityI {  
        "email": string[]   
}