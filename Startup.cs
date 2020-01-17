using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JCA_blog.Startup))]
namespace JCA_blog
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
