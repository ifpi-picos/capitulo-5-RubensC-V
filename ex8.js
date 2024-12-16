let pedido = prompt ("Digite seu pedido:")

switch (pedido){
    case "pizza":
        console.log ("pizza - 1,00 R$");
        break;
        case "hamburguer":
            console.log ("Hamburguer - 2,00 R$");
            break;
            case "salada":
                console.log ("Salada - 3,00 R$");
                break;
                case "macarrão":
                    console.log ("Macarrão - 4,00 R$");
                    break;
                    default:
                        console.log ("Pedido inválido!!!");
}