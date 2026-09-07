'use client';

import React from 'react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: 'primary' | 'danger' | 'warning';
  maxWidth?: string;
  maxHeight?: string;
  onConfirm?: () => void;
  children?: React.ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  icon = '✨',
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmVariant = 'primary',
  maxWidth = '520px',
  maxHeight = '90vh',
  onConfirm,
  children,
}) => {
  if (!isOpen) return null;

  const getVariantStyles = () => {
    switch (confirmVariant) {
      case 'danger':
        return {
          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)',
        };
      case 'warning':
        return {
          background: 'linear-gradient(135deg, #f59e0b, #d97706)',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)',
        };
      default:
        return {
          background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
        };
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          padding: '28px',
          width: '100%',
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: children ? '20px' : '16px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: confirmVariant === 'danger' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(99, 102, 241, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>{title}</h3>
            {description && (
              <p style={{ margin: '4px 0 0 0', fontSize: '0.86rem', color: '#64748b', lineHeight: 1.4 }}>
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Form Body */}
        {children && <div>{children}</div>}

        {/* Footer Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              color: '#475569',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
            }}
          >
            {cancelText}
          </button>

          {onConfirm && (
            <button
              type="button"
              onClick={() => {
                onConfirm();
              }}
              style={{
                padding: '10px 24px',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                ...getVariantStyles(),
              }}
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
