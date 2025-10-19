import { Search } from 'lucide-react'

const Header = ({onChange}) => {
    return (
        <>
            <header data-bs-theme="dark" className={'fixed-top bg-dark'}>
                <div className={'container d-flex justify-content-center'}>
                    <div className={'m-2 p-1 border-secondary border-1 border align-content-center rounded'}>
                        <Search className={'text-white'} size={25}/>
                    </div>

                    <input className={'w-75 ms-0 m-2 p-1'}
                           name={"movieInput"}
                           type="text"
                           placeholder={"Введіть назву фільма..."}
                           onChange={(e) => onChange(e)}/>
                </div>

            </header>


        </>
    );
}

export default Header;