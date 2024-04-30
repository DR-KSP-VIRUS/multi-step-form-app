<template>
    <div class="content">
        <div class="form-container">
            <h3>Personal info</h3>
            <p>Please provide your name, email,
                address, and phone number
            </p>
            <form class="form">
                <div :class="errorField.username?'error form-group':'form-group' ">
                    <label for="username">Name
                        <span v-if="errorField.username">{{ errorField.username }}</span>
                    </label>
                    <input type="text" name="username" 
                        id="username" :class="errorField.username?'error-field form-input':'form-input' "
                        placeholder="eg. Stephen King"
                        v-model="formData.username"
                    />
                    
                </div>
                <div :class="errorField.email?'error form-group':'form-group' ">
                    <label for="email">Email Address
                        <span v-if="errorField.email">{{ errorField.email }}</span>
                    </label>
                    <input type="email" name="email" 
                        id="email" :class="errorField.email?'error-field form-input':'form-input' "
                        placeholder="eg. stephenking@lorem.com"
                        v-model="formData.email"
                    />
                    
                </div>
                <div :class="errorField.phone?'error form-group':'form-group' ">
                    <label for="phone">Phone Number
                        <span v-if="errorField.phone">{{ errorField.phone }}</span>
                    </label>
                    <input type="text" name="phone" 
                        id="phone" :class="errorField.phone?'error-field form-input':'form-input' "
                        placeholder="eg. +1 234 567 890"
                        v-model="formData.phone"
                    />
                </div>
            </form>
        </div>
    </div>
    <div class="mobile-nav">
        &nbsp;
        <BottomNav :link="nextLink" linkName="Next Step"
            color="var(--alabaster)" bgColor="var(--marine-blue)"
           @onBtnClick="handleNextClick" 
        />
    </div>
</template>

<script setup>
    import { ref,onMounted } from 'vue';
    import router from '@/router';
    import { useUserStore } from '@/stores/userStore';
    import BottomNav from '../components/BottomNav.vue';


    const nextLink = ref('');
    const formData = ref({
        username: '',
        email: '',
        phone: ''
    });

    const errorField = ref({
        username: '',
        email: '',
        phone: ''
    });

    const userStore = useUserStore();

    const validateFields = () => {
        for (const key in formData.value) {
            if (Object.hasOwnProperty.call(formData.value, key)) {
                if (formData.value[key] === ''){
                    errorField.value[key] = "This field is required";
                } else {
                    errorField.value[key] = '';
                }
            }
        }
    }

    const isValidForm = () => {
        validateFields()
        if (formData.value.username && formData.value.email && formData.value.phone){
            return true;
        }
        return false
    }

    const handleNextClick = () => {
        if (!isValidForm()) return;
        userStore.addUser(formData);
        router.push('/plans');
}

onMounted(() => {
    if (userStore.userExists) {
        formData.value.email = userStore.user.email;
        formData.value.phone = userStore.user.phone;
        formData.value.username = userStore.user.username;
    }
});
</script>


<style scoped>
    .form-container {
        padding: 0rem 1rem;
        display: flex;
        flex-direction: column;
    }

    .form-container h3 {
        font-family: 'Ubuntu-Bold';
        padding: 1rem 0;
    }

    .form-container p {
        font-family: 'Ubuntu-Regular';
        color: var(--cool-gray);
        padding: 0rem 5rem 0 0 ;
        line-height: 1.7rem;
    }

    .form {
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem 0 0;
        margin-block-end: 1rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        padding: 0.9rem 0;
        color: var(--marine-blue);
        font-family: 'Ubuntu-Bold';
    }

    .form-group label {
        display: flex;
        justify-content: space-between;
        margin-bottom: .5rem;
    }

    .form-group label > span {
        font-family: 'Ubuntu-Regular';
    }

    .form-input {
        width: 100%;
        padding: 0.6rem 1rem;
        outline: none;
        font-family: 'Ubuntu-Regular';
        font-size: 15px;
        background: transparent;
        border: .14rem solid var(--light-gray);
        border-radius: .3rem;
    }

    .form-input:focus-within{
        border: 1px solid var(--purplish-blue);
    }

    .error {
        color:var(--strawberry-red);
    }

    .error-field {
        border: 1px solid var(--strawberry-red);
    }
</style>