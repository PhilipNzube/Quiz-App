export default function LoaderHandler() {
    setTimeout(() => {
        document.getElementById("LoaderHandler").style.display = "none";
    }, 2000);
    return (
        <>
            <div id="LoaderHandler">
                
        </div>
        </>
    )
}