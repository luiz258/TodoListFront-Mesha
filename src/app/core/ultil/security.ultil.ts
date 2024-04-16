import { User } from "../interface/user.interface";

export class SecurityUltil{

  public static set(users: User, token: string) {
    const data = JSON.stringify(users);

    localStorage.setItem('userTodo', btoa(data));
    localStorage.setItem('tokenTodo',token);
  }

public static setUser(user: User) {
    const data = JSON.stringify(user);
    localStorage.setItem('userTodo', btoa(data));
}

public static setToken(token: string) {
    localStorage.setItem('tokenTodo', token);
}



public static getUser(): User | null {
    const data = localStorage.getItem('userTodo');
    if (data) {
        return JSON.parse(atob(data));

    } else {
        return null;
    }
}

public static getToken(): string | null {
    const data = localStorage.getItem('tokenTodo');
    if (data) {
        return data;
    } else {
        return null;
    }
}
public static hasToken(): boolean {
    if (this.getToken())
        return true;
    else
        return false;

}

public static clear() {
    localStorage.removeItem('userTodo');
    localStorage.removeItem('tokenTodo');
}


}
