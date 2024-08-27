import { ref } from 'vue'
import type { ApiError, UserTokens } from '~/helpers/interfaces'

export const keyPress: Ref<number> = ref(0)
export const keyPressCode: Ref<number> = ref(0)

export const userTokensState = reactive<UserTokens>({ access: '' })

const getLSTokens = () => {
    const LSTokens = window && window?.localStorage ? localStorage.getItem('tokens') : null
    return  LSTokens ? JSON.parse(LSTokens) : { access: '' }
}

export const userTokens = computed({
    get() {
        return userTokensState?.access ? userTokensState : getLSTokens()
    },
    set(newValue: UserTokens) {
        userTokensState.access = newValue.access
        userTokensState.update = Date.now()
        localStorage.setItem('tokens', JSON.stringify(userTokensState))
    }
})

export const apiErrors = reactive<ApiError[]>([])
