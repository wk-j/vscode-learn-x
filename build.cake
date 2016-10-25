#addin "nuget:?package=Cake.SquareLogo"

Task("Publish").Does(() => {
    StartProcess("vsce", new ProcessSettings {
        Arguments = "publish"
    });
});

Task("Icon").Does(() =>{
    CreateLogo("Learn-X", "images/icon.png", new LogoSettings {
        FontFamily = "Futura",
        //FontFamily = "Herculanum",
        Background = "RoyalBlue",
        Foreground = "White",
        Padding = 30
    });
});

var target = Argument("target", "default");
RunTarget(target);