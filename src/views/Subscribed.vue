<template>
    <div class="content">
        <div class="subscribed">
            <img src="/images/icon-thank-you.svg" alt="thankyouicon">
            <h3>Thank you!</h3>
            <p>
                Thanks for confirming your subscription!
                We hope you have fun using our platform. 
                If you ever need support, please feel free to 
                email us at support@loremgaming.com.
            </p>
        </div>
    </div>
</template>

<style>
    .subscribed {
        display: flex;
        flex-direction: column;
        place-items: center;
        padding: 0 1.4rem;
        line-height: 1.7rem;
    }

    .subscribed img {
        padding-block: 1.7rem;
    }

    .subscribed h3 {
        font-family: 'Ubuntu-Medium';
        padding-block-end: 1rem;
    }

    .subscribed p {
        text-align: center;
        padding: 0 2rem;
        font-family: 'Ubuntu-Regular';
        color: var(--cool-gray);
    }
</style>