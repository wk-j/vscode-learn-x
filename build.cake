#addin "nuget:?package=Cake.SquareLogo"

Task("Publish").Does(() => {
    StartProcess("vsce", new ProcessSettings {
        Arguments = "publish"
    });
});

Task("Icon").Does(() =>{
    CreateLogo("Learn X", "images/icon.png", new LogoSettings {
        //FontFamily = "Krungthep",
        //FontFamily = "Herculanum",
        //FontFamily = "Phosphate",
        Background = "RoyalBlue",
        Foreground = "White",
        //FontSize = 100,
        Padding = 50
    });
});

var target = Argument("target", "default");
RunTarget(target);