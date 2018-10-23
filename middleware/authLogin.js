import Cookies from "js-cookie"
export default function ({ store, redirect }) {
    // If the user is not authenticated
    	if (Cookies.get("authLogin")!=1) {
	      return redirect('/login')
    }
    
  }