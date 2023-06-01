import styled from "styled-components";

export const Container = styled.header`
        display: flex;
        flex-direction: row;

        #titleWrapper{
            display: flex;
            align-items: end;
            margin: 2rem 0 0 5rem;
            z-index: 2;
            width: fit-content;
           
        }
        
        a{
            font-family: "Orbitron";
            font-weight: 800;
            font-size: 8rem;
            color: ${({theme}) => theme.titles};
        }

        span{
            font-family: "Monda";
            font-size: 3rem;
            margin-bottom: 1rem;
            margin-left: 1.8rem;
        }


        #buttonWrapper{
            position: relative;
            
            a{   
                position: absolute;
                top: 2.5rem;
                left: 3.5rem;
                svg{
                    font-size: 5rem;
                }
            }
        }


//------------------ Media Queries ------------------

    @media(max-width: 1730px){
        a{
            font-size: 7.5rem;
        }

        span{
            font-size: 2.2rem;
            margin-bottom: 10px;
            margin-left: 9px;
        }

        #buttonWrapper{
            a{
                top: 2.5rem;
                left: 3rem;
                svg{
                    font-size: 4.5rem;
                }
            }
        }   
    }

    @media(max-width: 1500px){
        #titleWrapper{
            margin-top: 1.8rem;
        }

        a{
            font-size: 7.5rem;
            width: fit-content;
        }

        span{
            font-size: 2.2rem;
            margin-bottom: 10px;
            margin-left: 9px;
        }
    }

    @media(max-width: 1250px){
        #titleWrapper{
            margin: 1.8rem 0 0 3rem;
        }

        a{
            font-size: 5.8rem;
        }

        span{
            font-size: 1.9rem;
            margin-bottom: 8px;
            margin-left: 7px;
        }

        #buttonWrapper{
            a{
                top: 2rem;
                left: 2rem;
                svg{
                    font-size: 3.5rem;
                }
            }
        }
    }

    @media(max-width: 1030px){
        #titleWrapper{
            margin: 1.5rem 0 0 3rem;
            flex-direction: column;
            align-items: flex-start;
        }

        a{
            font-size: 5.5rem;
        }

        #buttonWrapper{
            a{  
                top: 2.1rem;
                left: 3rem;
                svg{
                    font-size: 4rem;
                }
            }
        }
    }

    @media(max-width: 800px){
        #titleWrapper{
            flex-direction: column;
            justify-content: flex-start;
            align-items: start;
            margin: 1rem 0 0 1.8rem;
        }

        a{
            font-size: 3.5rem;
            width: max-content;
        }

        #buttonWrapper{
            a{      
                top: -7.5rem;
                left: 27.5rem;
                svg{
                    font-size: 2.5rem;
                }
            }
        }

        span{
            font-size: 2rem;
            margin: 0;
        }
    }

    @media(max-width: 395px){
        #buttonWrapper{
            a{       
                left: unset;
                top: -4rem;
                right: 2.3rem;
                svg{
                    font-size: 2.5rem;
                }
            }
        }
    }

`