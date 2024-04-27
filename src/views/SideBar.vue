<template>
    <ul class="menu">
        <li class="menu-item">
            <RouterLink class="menu-link" to="/">
                <p>1</p>
                <span class="menu-text">
                    <small>Step 1</small> 
                    Your info
                </span>
            </RouterLink>
        </li>
        <li class="menu-item">
            <RouterLink class="menu-link" to="/plans">
            <p>2</p>
            <span class="menu-text">
                <small>Step 2</small> 
                Select plan
            </span>
            </RouterLink>
        </li>
        <li class="menu-item">
            <RouterLink class="menu-link" to="/plan-add-ons">
                <p>3</p>
                <span class="menu-text">
                    <small>Step 3</small> 
                    Add-ons
                </span>
            </RouterLink>
        </li>
        <li class="menu-item">
            <RouterLink class="menu-link" to="/summary">
                <p>4</p>
                <span class="menu-text">
                    <small>Step 4</small> 
                    Summary
                </span>
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>
    .menu-link> p{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid var(--white);
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: -2rem .7rem;
        text-decoration: none;
    }

    .menu-link {
        text-decoration: none;
    }

    .menu-link p {
        color: var(--white);
        font-family: 'Ubuntu-bold';
    }    
    .router-link-exact-active p {
        background-color: var(--pastel-blue);
        color: var(--marine-blue);
    }

    @media screen and (min-width:1024px) {
        .menu-text {
          display: flex;
          color: var(--white);
          flex-direction: column;
          font-family: 'Ubuntu-Regular';
          text-transform: uppercase;
        }

        .menu-text small {
            color: var(--pastel-blue);
            margin-block-end: .2rem;
        }

    }
</style>