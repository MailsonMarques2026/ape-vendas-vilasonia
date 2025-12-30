import { Link as RouterLink, NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Ajustamos a interface para que 'to' seja opcional, já que às vezes usamos apenas 'href'
export interface NavLinkCompatProps extends Omit<NavLinkProps, "className" | "to"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  href?: string;
  to?: NavLinkProps["to"]; 
}

// CORREÇÃO 1: 'export' direto aqui para corrigir o erro de Build
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, href, ...props }, ref) => {
    
    // Lógica para decidir o destino
    const targetPath = to ? (typeof to === "string" ? to : to.pathname) : href;
    const isAnchor = typeof targetPath === "string" && targetPath.startsWith("#");

    // Se for âncora (#id), renderiza uma tag 'a' padrão
    if (isAnchor) {
      return (
        <a
          ref={ref}
          href={targetPath as string}
          // CORREÇÃO 2: Re-adicionado 'font-bold' para manter o design
          className={cn("font-bold", className)} 
          {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
        >
          {props.children}
        </a>
      );
    }

    // Caso contrário, usa o RouterNavLink para navegação interna
    return (
      <RouterNavLink
        ref={ref}
        to={to || ""} // Fallback simples para evitar erro se 'to' for undefined
        // CORREÇÃO 2: Re-adicionado 'font-bold'
        className={({ isActive, isPending }) =>
          cn(
            "font-bold", 
            className, 
            isActive && activeClassName, 
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";