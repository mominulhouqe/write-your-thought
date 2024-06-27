import { Button } from "antd";

const Login = () => {


//   const { register, handleSubmit } = useForm({
//   });


//   const onSubmit = async (data) => {
//     const userInfo = {
//       id: data.userId,
//       password: data.password,
//     };


//onSubmit={handleSubmit(onSubmit)}

  return (
  <div className="bg-gray-50 flex h-screen items-center justify-center">
      <form action="" >
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" className="border"/>
      </div>
      <div>
        {" "}
        <label htmlFor="id">Password: </label>
        <input type="text" id="password" className="border"  />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  </div>
  );
};

export default Login;
