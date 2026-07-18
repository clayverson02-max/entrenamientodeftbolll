import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-lg font-black">E</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold">Elite Football</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Training
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            La plataforma premium de entrenamiento de fútbol en español. Ejercicios,
            sesiones y coaching IA en un solo lugar.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
            Plataforma
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/precios" className="hover:text-foreground">Precios</Link></li>
            <li><a href="#biblioteca" className="hover:text-foreground">Biblioteca</a></li>
            <li><a href="#coach-ia" className="hover:text-foreground">Coach IA</a></li>
            <li><a href="#categorias" className="hover:text-foreground">Categorías</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
            Empresa
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/nosotros" className="hover:text-foreground">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
            <li><a href="#" className="hover:text-foreground">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
            Legal
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Términos</a></li>
            <li><a href="#" className="hover:text-foreground">Privacidad</a></li>
            <li><a href="#" className="hover:text-foreground">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Elite Football Training. Todos los derechos reservados.</p>
          <p>Hecho con pasión por el fútbol ⚽</p>
        </div>
      </div>
    </footer>
  );
}
