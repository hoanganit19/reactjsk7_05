import { useReducer } from "react";
function Form(){

    const formReducer = (state, action) => {
        return {
            ...state,
            ...(typeof action==='function')?action(state):action
        }
    }

    const [state, setState] = useReducer(formReducer, {
        username: '',
        password: ''
    });

    const {username, password} = state;

    const changeValue = (e) => {
        let dataInput = {};

        dataInput[e.target.name] = e.target.value;

        setState(dataInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Tên đăng nhập</label>
                    <input type="text" name="username" className="form-control" placeholder="Tên đăng nhập..." defaultValue={username}
                    onChange = {changeValue}
                    />
                </div>

                <div className="mb-3">
                    <label>Mật khẩu</label>
                    <input type="password" name="password" className="form-control" placeholder="Mật khẩu..." defaultValue={password}
                    onChange = {changeValue}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
            </form>
        </>
    );

}

export default Form;