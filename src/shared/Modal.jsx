import { FaXmark  } from "react-icons/fa6";

const Modal = (onClose) => {
    return (
        <div className="fixed inset-0 bg-feldgrau bg-opacity-30 backdrop-blur-sm flex justicy-center items-center">
            <div className="mt-10 flex flex-col gap-5 text-primary">
                <button onClick={onClose} className="place-self-end"><FaXmark size={30}/> </button>
                <div className="rounded-xl px-20 py-10 flex-flex-col gap-5 items-center mx-4">
                    <h1 className="text-3xl font-extrabold">Thank you for reaching out!</h1>
                    <p className="text-3xl font-bold max-w-md text-center"> I will be in touch shortly!</p>
                </div>

            </div>
        </div>
    );
};

export default Modal;