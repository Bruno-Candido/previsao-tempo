import { Divider } from 'native-base'

export function Line(){
    return(
        <Divider my='2' w='80%' _light={{ bg: 'primary.100' }} _dark={{ bg: 'primary.50'}} />
    )
}