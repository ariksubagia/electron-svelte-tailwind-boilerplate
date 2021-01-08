<script>
    export let title = "App Title"
    export let subtitle = "module title"

    function maximizeWindow(){
        window.control.maximize()
    }

    function closeWindow(){
        window.control.close()
    }

    function toggleDarkMode(){
        document.querySelector('html').classList.toggle('dark')
    }
</script>

<div class="flex flex-row justify-between items-center text-sm text-gray-600 dark:text-white overflow-y-hidden" style="height:30px;">
    <div class="flex flex-row flex-grow">
        <div class="text-left">
            <a href="/#" class="titlebar-button" on:click|preventDefault>
                <i class="icofont-navigation-menu"></i>
            </a>
        </div>
        <div class="flex-grow flex flex-row items-center" style="-webkit-app-region: drag;">
            <div class="app-content-title flex-shrink-0 flex-grow-0 px-3">{ title }</div>
            <div class="flex-shrink-0 flex-grow text-center hidden lg:block">
                <span>{ subtitle }</span>
            </div>
        </div>
    </div>
    <ul class="app-title-window-control inline-block">
        <li class="inline-block">
            <a href="/#" class="titlebar-button" on:click|preventDefault={toggleDarkMode}><i class="icofont-light-bulb"></i></a>
        </li>
        <li class="inline-block">
            <a href="/#" class="titlebar-button" on:click|preventDefault={maximizeWindow}><i class="icofont-maximize"></i></a>
        </li>
        <li class="inline-block">
            <a href="/#" class="titlebar-button" on:click|preventDefault={closeWindow}><i class="icofont-close-line"></i></a>
        </li>
    </ul>
</div>