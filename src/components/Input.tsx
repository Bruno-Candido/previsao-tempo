import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({ ...rest }: IInputProps){
    return(
        <NativeBaseInput
            bg='primary.900'
            h={16}
            w='75%'
            px={4}
            borderColor='primary.600'
            fontSize='md'
            fontFamily='body'
            color='white'
            placeholderTextColor='primay.300'
            _focus={{
                bg:'primay.800',
                borderColor:'primay.600'
            }}
            variant='rounded'
            { ...rest }
        />
    )
}