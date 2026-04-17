// Definição de todas as telas do app
const screens = {
    welcome: `
        <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; background: #0A0A0A; padding: 60px 24px;">
            <div style="text-align: center; margin-top: 80px;">
                <div style="font-size: 80px; margin-bottom: 24px;">💪</div>
                <h1 style="font-size: 48px; font-weight: 900; color: #FFFFFF; letter-spacing: 4px; margin-bottom: 8px;">IRON GYM</h1>
                <p style="font-size: 20px; color: #FF6B35; font-weight: 600; margin-bottom: 16px;">Transforme Seu Corpo</p>
                <p style="font-size: 16px; color: #888888; line-height: 24px; padding: 0 20px;">Registre treinos, acompanhe progresso e alcance seus objetivos</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <button style="background: linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%); color: #FFFFFF; border: none; border-radius: 12px; padding: 16px; font-size: 18px; font-weight: 700; letter-spacing: 2px;">ENTRAR</button>
                <button style="background: transparent; color: #FF6B35; border: 2px solid #FF6B35; border-radius: 12px; padding: 16px; font-size: 18px; font-weight: 700; letter-spacing: 2px;">CRIAR CONTA</button>
            </div>
        </div>
    `,
    
    login: `
        <div style="height: 100%; background: #0A0A0A; padding: 24px; overflow-y: auto;">
            <div style="margin-top: 60px; margin-bottom: 24px;">
                <div style="width: 40px; height: 40px; color: #FFFFFF; font-size: 24px;">←</div>
            </div>
            <div style="text-align: center; margin-bottom: 48px;">
                <div style="font-size: 60px; color: #FF6B35; margin-bottom: 16px;">💪</div>
                <h2 style="font-size: 36px; font-weight: 700; color: #FFFFFF; margin-bottom: 8px;">BEM-VINDO</h2>
                <p style="font-size: 16px; color: #888888;">Entre para continuar</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; align-items: center; background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; gap: 12px;">
                    <span style="color: #888888; font-size: 20px;">✉️</span>
                    <input type="text" placeholder="Email" style="flex: 1; background: transparent; border: none; color: #FFFFFF; font-size: 16px; outline: none;" />
                </div>
                <div style="display: flex; align-items: center; background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; gap: 12px;">
                    <span style="color: #888888; font-size: 20px;">🔒</span>
                    <input type="password" placeholder="Senha" style="flex: 1; background: transparent; border: none; color: #FFFFFF; font-size: 16px; outline: none;" />
                </div>
                <button style="background: linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%); color: #FFFFFF; border: none; border-radius: 12px; padding: 16px; font-size: 18px; font-weight: 700; letter-spacing: 2px; margin-top: 16px;">ENTRAR</button>
                <p style="text-align: center; color: #888888; margin-top: 24px;">Não tem conta? <span style="color: #FF6B35; font-weight: 700;">Cadastre-se</span></p>
            </div>
        </div>
    `,
    
    home: `
        <div style="height: 100%; background: #0A0A0A; overflow-y: auto;">
            <div style="padding: 60px 24px 24px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
                    <div>
                        <h2 style="font-size: 28px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">Olá, Carlos!</h2>
                        <p style="font-size: 16px; color: #888888;">Pronto para treinar?</p>
                    </div>
                    <div style="font-size: 40px;">💪</div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px;">
                    <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 16px; padding: 20px; text-align: center;">
                        <div style="font-size: 32px; color: #FF6B35; margin-bottom: 8px;">🏋️</div>
                        <div style="font-size: 32px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">25</div>
                        <div style="font-size: 14px; color: #888888;">Treinos</div>
                    </div>
                    <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 16px; padding: 20px; text-align: center;">
                        <div style="font-size: 32px; color: #FF6B35; margin-bottom: 8px;">💪</div>
                        <div style="font-size: 32px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">150</div>
                        <div style="font-size: 14px; color: #888888;">Exercícios</div>
                    </div>
                </div>
                <div style="margin-bottom: 32px;">
                    <h3 style="font-size: 20px; font-weight: 700; color: #FFFFFF; margin-bottom: 16px;">Ações Rápidas</h3>
                    <button style="display: flex; align-items: center; width: 100%; background: #FF6B35; border: none; border-radius: 12px; padding: 16px; gap: 12px;">
                        <span style="font-size: 24px; color: #FFFFFF;">➕</span>
                        <span style="flex: 1; font-size: 16px; font-weight: 700; color: #FFFFFF; text-align: left;">Registrar Treino</span>
                        <span style="font-size: 24px; color: #FFFFFF;">›</span>
                    </button>
                </div>
                <div>
                    <h3 style="font-size: 20px; font-weight: 700; color: #FFFFFF; margin-bottom: 16px;">Treinos Recentes</h3>
                    <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                        <div style="font-size: 16px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">06/04/2025</div>
                        <div style="font-size: 14px; color: #888888;">5 exercícios</div>
                    </div>
                    <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                        <div style="font-size: 16px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">05/04/2025</div>
                        <div style="font-size: 14px; color: #888888;">4 exercícios</div>
                    </div>
                </div>
            </div>
            <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #1A1A1A; border-top: 1px solid #2A2A2A; display: flex; justify-content: space-around; padding: 8px;">
                <div style="flex: 1; text-align: center; padding: 8px;">
                    <div style="font-size: 24px; color: #FF6B35; margin-bottom: 4px;">🏠</div>
                    <div style="font-size: 12px; color: #FF6B35; font-weight: 600;">Início</div>
                </div>
                <div style="flex: 1; text-align: center; padding: 8px;">
                    <div style="font-size: 24px; color: #666666; margin-bottom: 4px;">🏋️</div>
                    <div style="font-size: 12px; color: #666666;">Treinos</div>
                </div>
                <div style="flex: 1; text-align: center; padding: 8px;">
                    <div style="font-size: 24px; color: #666666; margin-bottom: 4px;">💪</div>
                    <div style="font-size: 12px; color: #666666;">Exercícios</div>
                </div>
                <div style="flex: 1; text-align: center; padding: 8px;">
                    <div style="font-size: 24px; color: #666666; margin-bottom: 4px;">👥</div>
                    <div style="font-size: 12px; color: #666666;">Social</div>
                </div>
                <div style="flex: 1; text-align: center; padding: 8px;">
                    <div style="font-size: 24px; color: #666666; margin-bottom: 4px;">👤</div>
                    <div style="font-size: 12px; color: #666666;">Perfil</div>
                </div>
            </div>
        </div>
    `,
    
    workout: `
        <div style="height: 100%; background: #0A0A0A; overflow-y: auto; padding-bottom: 80px;">
            <div style="padding: 60px 24px 24px;">
                <h2 style="font-size: 28px; font-weight: 700; color: #FFFFFF; margin-bottom: 24px;">Meus Treinos</h2>
                <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                        <div style="font-size: 16px; font-weight: 700; color: #FFFFFF;">Treino A - Peito e Tríceps</div>
                        <div style="font-size: 14px; color: #FF6B35;">✓</div>
                    </div>
                    <div style="font-size: 14px; color: #888888; margin-bottom: 8px;">06/04/2025 - 14:30</div>
                    <div style="display: flex; gap: 16px;">
                        <div style="font-size: 12px; color: #666666;">🏋️ 5 exercícios</div>
                        <div style="font-size: 12px; color: #666666;">⏱️ 65 min</div>
                    </div>
                </div>
                <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                        <div style="font-size: 16px; font-weight: 700; color: #FFFFFF;">Treino B - Costas e Bíceps</div>
                        <div style="font-size: 14px; color: #FF6B35;">✓</div>
                    </div>
                    <div style="font-size: 14px; color: #888888; margin-bottom: 8px;">05/04/2025 - 09:00</div>
                    <div style="display: flex; gap: 16px;">
                        <div style="font-size: 12px; color: #666666;">🏋️ 4 exercícios</div>
                        <div style="font-size: 12px; color: #666666;">⏱️ 50 min</div>
                    </div>
                </div>
                <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                        <div style="font-size: 16px; font-weight: 700; color: #FFFFFF;">Treino C - Pernas</div>
                        <div style="font-size: 14px; color: #FF6B35;">✓</div>
                    </div>
                    <div style="font-size: 14px; color: #888888; margin-bottom: 8px;">04/04/2025 - 18:00</div>
                    <div style="display: flex; gap: 16px;">
                        <div style="font-size: 12px; color: #666666;">🏋️ 6 exercícios</div>
                        <div style="font-size: 12px; color: #666666;">⏱️ 80 min</div>
                    </div>
                </div>
                <button style="width: 100%; background: linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%); color: #FFFFFF; border: none; border-radius: 12px; padding: 16px; font-size: 16px; font-weight: 700; margin-top: 8px;">+ NOVO TREINO</button>
            </div>
        </div>
    `,
    
    exercises: `
        <div style="height: 100%; background: #0A0A0A; overflow-y: auto; padding-bottom: 80px;">
            <div style="padding: 60px 24px 24px;">
                <h2 style="font-size: 28px; font-weight: 700; color: #FFFFFF; margin-bottom: 24px;">Biblioteca de Exercícios</h2>
                <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                    <div style="font-size: 16px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">Supino Reto</div>
                    <div style="font-size: 14px; color: #FF6B35; margin-bottom: 8px;">Peitoral</div>
                    <div style="font-size: 12px; color: #888888; line-height: 18px;">Deite-se no banco, pegue a barra com as mãos afastadas na largura dos ombros...</div>
                </div>
                <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                    <div style="font-size: 16px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">Agachamento Livre</div>
                    <div style="font-size: 14px; color: #FF6B35; margin-bottom: 8px;">Pernas</div>
                    <div style="font-size: 12px; color: #888888; line-height: 18px;">Com a barra nas costas, desça flexionando os joelhos até 90 graus...</div>
                </div>
                <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                    <div style="font-size: 16px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">Levantamento Terra</div>
                    <div style="font-size: 14px; color: #FF6B35; margin-bottom: 8px;">Costas</div>
                    <div style="font-size: 12px; color: #888888; line-height: 18px;">Com a barra no chão, segure com as mãos, mantenha as costas retas...</div>
                </div>
                <div style="background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                    <div style="font-size: 16px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">Desenvolvimento com Halteres</div>
                    <div style="font-size: 14px; color: #FF6B35; margin-bottom: 8px;">Ombros</div>
                    <div style="font-size: 12px; color: #888888; line-height: 18px;">Sentado ou em pé, levante os halteres acima da cabeça...</div>
                </div>
            </div>
        </div>
    `,
    
    profile: `
        <div style="height: 100%; background: #0A0A0A; overflow-y: auto; padding-bottom: 80px;">
            <div style="padding: 60px 24px 24px;">
                <div style="text-align: center; margin-bottom: 48px;">
                    <div style="width: 120px; height: 120px; border-radius: 60px; background: #1A1A1A; border: 3px solid #FF6B35; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 60px;">👤</div>
                    <h2 style="font-size: 24px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">Carlos Silva</h2>
                    <div style="font-size: 14px; color: #888888; margin-bottom: 12px;">supervisor@irongym.com</div>
                    <div style="display: inline-block; background: rgba(255, 107, 53, 0.2); border: 1px solid #FF6B35; border-radius: 16px; padding: 6px 16px;">
                        <span style="font-size: 12px; color: #FF6B35; font-weight: 700;">SUPERVISOR</span>
                    </div>
                </div>
                <div style="margin-bottom: 32px;">
                    <div style="display: flex; align-items: center; background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                        <span style="font-size: 24px; color: #FFFFFF; margin-right: 16px;">👤</span>
                        <span style="flex: 1; font-size: 16px; color: #FFFFFF;">Editar Perfil</span>
                        <span style="font-size: 24px; color: #666666;">›</span>
                    </div>
                    <div style="display: flex; align-items: center; background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                        <span style="font-size: 24px; color: #FFFFFF; margin-right: 16px;">🔑</span>
                        <span style="flex: 1; font-size: 16px; color: #FFFFFF;">Códigos de Acesso</span>
                        <span style="font-size: 24px; color: #666666;">›</span>
                    </div>
                    <div style="display: flex; align-items: center; background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                        <span style="font-size: 24px; color: #FFFFFF; margin-right: 16px;">⚙️</span>
                        <span style="flex: 1; font-size: 16px; color: #FFFFFF;">Configurações</span>
                        <span style="font-size: 24px; color: #666666;">›</span>
                    </div>
                    <div style="display: flex; align-items: center; background: #1A1A1A; border: 1px solid #2A2A2A; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                        <span style="font-size: 24px; color: #FFFFFF; margin-right: 16px;">❓</span>
                        <span style="flex: 1; font-size: 16px; color: #FFFFFF;">Ajuda</span>
                        <span style="font-size: 24px; color: #666666;">›</span>
                    </div>
                </div>
                <button style="display: flex; align-items: center; justify-content: center; width: 100%; background: #FF3B3B; border: none; border-radius: 12px; padding: 16px; gap: 12px;">
                    <span style="font-size: 24px; color: #FFFFFF;">🚪</span>
                    <span style="font-size: 16px; font-weight: 700; color: #FFFFFF;">Sair</span>
                </button>
            </div>
        </div>
    `
};