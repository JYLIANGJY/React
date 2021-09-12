function LoginPage() {
        const [name, setName] = useState(''); // 用户名
        const [pwd, setPwd] = useState(''); // 密码
        const [isLoading, setIsLoading] = useState(false); // 是否展示loading，发送请求中
        const [error, setError] = useState(''); // 错误信息
        const [isLoggedIn, setIsLoggedIn] = useState(false); // 是否登录

        const login = (event) => {
            event.preventDefault();
            setError('');
            setIsLoading(true);
            login({ name, pwd })
                .then(() => {
                    setIsLoggedIn(true);
                    setIsLoading(false);
                })
                .catch((error) => {
                    // 登录失败: 显示错误信息、清空输入框用户名、密码、清除loading标识
                    setError(error.message);
                    setName('');
                    setPwd('');
                    setIsLoading(false);
                });
        }
        return ( 
            //  返回页面
        )
    }



//使用useReducer来进行解决。
    const initState = {
        name: '',
        pwd: '',
        isLoading: false,
        error: '',
        isLoggedIn: false,
    }
    function loginReducer(state, action) {
        switch(action.type) {
            case 'login':
                return {
                    ...state,
                    isLoading: true,
                    error: '',
                }
            case 'success':
                return {
                    ...state,
                    isLoggedIn: true,
                    isLoading: false,
                }
            case 'error':
                return {
                    ...state,
                    error: action.payload.error,
                    name: '',
                    pwd: '',
                    isLoading: false,
                }
            default: 
                return state;
        }
    }
    function LoginPage() {
        const [state, dispatch] = useReducer(loginReducer, initState);
        //获取最新的状态
        const { name, pwd, isLoading, error, isLoggedIn } = state;
        const login = (event) => {
            event.preventDefault();
            dispatch({ type: 'login' });//出现isLoading
            login({ name, pwd })
                .then(() => {
                    dispatch({ type: 'success' });
                })
                .catch((error) => {
                    dispatch({
                        type: 'error'
                        payload: { error: error.message }
                    });
                });
        }
        return ( 
            //  返回页面
        )
    }
