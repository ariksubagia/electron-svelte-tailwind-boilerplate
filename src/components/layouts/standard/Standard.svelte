<script>
    import Titlebar from './Titlebar.svelte'
    import Navigation from './Navigation.svelte'
    import Footer from './Footer.svelte'

    export let title = "App title"
</script>
<div class="flex flex-col h-full">
    <Titlebar title={title} />
    <Navigation />
    <div class="app-body flex-grow flex-shrink-0">
        <slot></slot>
    </div>
    <Footer />
</div>