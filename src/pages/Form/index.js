import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles.css";

function Form () {

    
    const formSchema = yup.object().shape({

        username: yup.string().min(3, "Deve conter no mínimo 3 caracteres").max(18, "Deve conter no máximo 18 caracteres").required("Nome de usuário obrigatório"),
        name: yup.string().min(2, "Deve conter no mínimo 2 caracteres").required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        cpf: yup.string().required("CPF obrigatório").matches(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/, "CPF inválido"),
        adress: yup.string().required("Endereço obrigatório"),
        phone: yup.string().required("Telefone obrigatório").matches(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/, "Telefone inválido"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Senha deve conter letra maiúscula, minúscula e caractere especial"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser idênticas").required("Senha obrigatória"),
    })
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    const submitData = data => data;


    return (
        <> 
            <h2>Dados Pessoais</h2>
        
            <form className="form" onSubmit={handleSubmit(submitData)}>

                <div className="input-container">
                <input className="input-form" placeholder="" {...register("username")} />
                <label className="label-form">Nome de usuário</label>
                <span style={{color: "red" , fontSize:"10px"}}> {errors.username?.message} </span> 
                </div>

                <div className="input-container">
                <input className="input-form" placeholder="" {...register("name")} />
                <label className="label-form">Nome Completo</label>
                <span style={{color: "red" , fontSize:"10px" }}> {errors.name?.message} </span>
                </div>

                <div className="input-container">
                <input className="input-form" placeholder="" {...register("email")} />
                <label className="label-form">Email</label>
                <span style={{color: "red" , fontSize:"10px"}}> {errors.email?.message} </span>
                </div>

                <div className="input-container">
                <input  className="input-form" placeholder="" {...register("cpf")} />
                <label className="label-form">CPF</label>
                <span style={{color: "red" , fontSize:"10px"}}> {errors.cpf?.message} </span>
                </div>

                <div className="input-container">
                <input className="input-form" placeholder="" {...register("adress")} />
                <label className="label-form">Endereço</label>
                <span style={{color: "red" , fontSize:"10px"}}> {errors.adress?.message} </span>
                </div>

                <div className="input-container">
                <input className="input-form" placeholder="" {...register("phone")} />
                <label className="label-form">Telefone</label>
                <span style={{color: "red" , fontSize:"10px"}}> {errors.phone?.message} </span>
                </div>

                <div className="input-container">
                <input className="input-form" type="password" placeholder="" {...register("password")} />
                <label className="label-form">Senha</label>
                <span style={{color: "red" , fontSize:"10px"}}> {errors.password?.message} </span>
                </div>

                <div className="input-container">
                <input className="input-form" type="password" placeholder="" {...register("confirmPassword")} />
                <label className="label-form">Confirmar Senha</label>
                <span style={{color: "red" , fontSize:"10px"}}> {errors.confirmPassword?.message} </span>
                </div>

                <button className="btn-form" type="submit"> Cadastrar </button>
            </form>
        </>
    )
}

export default Form;