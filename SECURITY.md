# Security Policy

## 🔒 Reporting a Vulnerability

Se você descobrir uma vulnerabilidade de segurança neste projeto, por favor, reporte de forma responsável.

### Como Reportar

**NÃO crie uma issue pública** para vulnerabilidades de segurança.

Em vez disso:

1. **Email**: Envie um email para ericmartins1997@gmail.com
2. **Assunto**: `[SECURITY] Descrição breve da vulnerabilidade`
3. **Conteúdo**: Inclua:
   - Descrição detalhada da vulnerabilidade
   - Passos para reproduzir
   - Potencial impacto
   - Sugestões de correção (se houver)

### O que esperar

- **Resposta inicial**: Dentro de 48 horas
- **Atualização de status**: Dentro de 7 dias
- **Correção**: Dependendo da severidade, priorizaremos apropriadamente

### Escopo

Este projeto é atualmente um **projeto de portfólio/demonstração** e:
- Usa dados mockados (não há dados reais)
- Não possui backend ou banco de dados
- Não realiza autenticação real
- Não processa informações sensíveis

Ainda assim, valorizamos reports sobre:
- Vulnerabilidades em dependências
- XSS (Cross-Site Scripting)
- Problemas de segurança no código cliente
- Configurações inseguras

### Divulgação Responsável

Concordamos em:
- Trabalhar com você para entender e resolver o problema
- Manter você informado sobre o progresso
- Creditar você na correção (se desejar)

Pedimos que você:
- Nos dê tempo razoável para corrigir antes de divulgar publicamente
- Não explore a vulnerabilidade maliciosamente
- Não acesse dados que não pertencem a você

## 🛡️ Dependências

Mantemos as dependências atualizadas e verificamos regularmente por vulnerabilidades conhecidas.

```bash
# Verificar vulnerabilidades
npm audit

# Corrigir automaticamente (quando possível)
npm audit fix
```

## 📦 Versões Suportadas

| Versão | Suportada          |
| ------ | ------------------ |
| 1.x.x  | ✅ Sim            |
| < 1.0  | ❌ Não            |

## 🔐 Boas Práticas Implementadas

- ✅ TypeScript para type safety
- ✅ Validação de dados com Zod
- ✅ ESLint para identificar código vulnerável
- ✅ Dependências auditadas regularmente
- ✅ Sem secrets hardcoded no código
- ✅ .env.example para variáveis de ambiente

## 📚 Recursos de Segurança

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [React Security](https://react.dev/learn/escape-hatches#security-pitfalls)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/authentication)

## 🙏 Agradecimentos

Agradecemos a todos que reportam vulnerabilidades de forma responsável e nos ajudam a manter o projeto seguro.

---

**Última atualização**: Abril 2026
